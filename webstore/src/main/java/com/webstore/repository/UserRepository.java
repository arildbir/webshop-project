package com.webstore.repository;

import com.webstore.domain.User;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by arildbirkeland on 29.04.2017.
 */
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);

    List<User> findAll();


}
