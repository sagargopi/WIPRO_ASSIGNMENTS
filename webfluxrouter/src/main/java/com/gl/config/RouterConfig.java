package com.gl.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.gl.handler.PersonHandler;

@Configuration
public class RouterConfig {

    @Bean
    public RouterFunction<ServerResponse> route(PersonHandler personHandler) {
    	return RouterFunctions
                .route(RequestPredicates.GET("/persons/{id}"), personHandler::getPerson)
                .andRoute(RequestPredicates.GET("/persons"), personHandler::getAllPersons)
                .andRoute(RequestPredicates.POST("/persons"), personHandler::createPerson)
                .andRoute(RequestPredicates.PUT("/persons/{id}"), personHandler::updatePerson)
                .andRoute(RequestPredicates.DELETE("/persons/{id}"), personHandler::deletePerson);

    }
}
