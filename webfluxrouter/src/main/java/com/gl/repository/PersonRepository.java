package com.gl.repository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gl.model.Person;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
@Repository
public class PersonRepository {

    private final Map<String, Person> personMap = new HashMap<>();

    public PersonRepository() {
        personMap.put("1", new Person("1", "John Doe"));
        personMap.put("2", new Person("2", "Jane Smith"));
    }

    public Mono<Person> findById(String id) {
        return Mono.justOrEmpty(personMap.get(id));
    }

    public Flux<Person> findAll() {
        return Flux.fromIterable(personMap.values());
    }

    public Mono<Person> save(Person person) {
        if (person.getId() == null || person.getId().isEmpty()) {
            person.setId(java.util.UUID.randomUUID().toString());
        }
        personMap.put(person.getId(), person);
        return Mono.just(person);
    }

    public Mono<Person> update(String id, Person person) {
        if (personMap.containsKey(id)) {
            personMap.put(id, person);
            return Mono.just(person);
        } else {
            return Mono.empty();
        }
    }

    public Mono<Void> delete(String id) {
        personMap.remove(id);
        return Mono.empty();
    }


}
