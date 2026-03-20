package com.gl;

import com.gl.model.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PersonApiTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    public void testGetAllPersons() {
        webTestClient.get().uri("/persons")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBodyList(Person.class)
                .hasSize(2);
    }

    @Test
    public void testGetPersonById() {
        webTestClient.get().uri("/persons/1")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody(Person.class)
                .isEqualTo(new Person("1", "John Doe"));
    }

    @Test
    public void testGetPersonByIdNotFound() {
        webTestClient.get().uri("/persons/99")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isNotFound();
    }

    @Test
    public void testCreatePersonWithId() {
        Person newPerson = new Person("3", "Alice");
        webTestClient.post().uri("/persons")
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(newPerson), Person.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody(Person.class)
                .isEqualTo(newPerson);
    }

    @Test
    public void testCreatePersonWithoutId() {
        Person newPerson = new Person(null, "Bob");
        webTestClient.post().uri("/persons")
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(newPerson), Person.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody(Person.class)
                .value(p -> {
                    assert p.getId() != null;
                    assert p.getName().equals("Bob");
                });
    }

    @Test
    public void testUpdatePerson() {
        Person updatedPerson = new Person("1", "John Updated");
        webTestClient.put().uri("/persons/1")
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(updatedPerson), Person.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody(Person.class)
                .isEqualTo(updatedPerson);
    }

    @Test
    public void testUpdatePersonNotFound() {
        Person updatedPerson = new Person("99", "Not Found");
        webTestClient.put().uri("/persons/99")
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(updatedPerson), Person.class)
                .exchange()
                .expectStatus().isNotFound();
    }

    @Test
    public void testDeletePerson() {
        webTestClient.delete().uri("/persons/2")
                .exchange()
                .expectStatus().isNoContent();

        // Verify it's actually deleted
        webTestClient.get().uri("/persons/2")
                .exchange()
                .expectStatus().isNotFound();
    }
}
