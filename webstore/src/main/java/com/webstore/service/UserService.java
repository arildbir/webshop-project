package com.webstore.service;

import com.webstore.domain.User;
import com.webstore.domain.security.UserRole;

import java.util.Set;

/**
 * Created by arildbirkeland on 29.04.2017.
 */
public interface UserService {

    User createUser(User user, Set<UserRole> userRoles);

}
