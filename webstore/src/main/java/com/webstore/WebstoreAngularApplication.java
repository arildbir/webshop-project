package com.webstore;

import com.webstore.config.SecurityUtility;
import com.webstore.domain.User;
import com.webstore.domain.security.Role;
import com.webstore.domain.security.UserRole;
import com.webstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class WebstoreAngularApplication implements CommandLineRunner {

    @Autowired
    private UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(WebstoreAngularApplication.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        User user1 = new User();
        user1.setFirstName("Arild");
        user1.setLastName("Birkeland");
        user1.setUsername("arildbir");
        user1.setPassword(SecurityUtility.passwordEncoder().encode("arildbir"));
        user1.setEmail("arildbir@gmail.com");
        Set<UserRole> userRoles = new HashSet<>();
        Role role1 = new Role();
        role1.setRoleId(1);
        role1.setName("ROLE_USER");
        userRoles.add(new UserRole(user1, role1));

        userService.createUser(user1, userRoles);
        userRoles.clear();


        User user2 = new User();
        user2.setFirstName("Admin");
        user2.setLastName("Admin");
        user2.setUsername("admin");
        user2.setPassword(SecurityUtility.passwordEncoder().encode("admin"));
        Role role2 = new Role();
        role2.setRoleId(2);
        role2.setName("ROLE_ADMIN");
        userRoles.add(new UserRole(user2, role2));

        userService.createUser(user2, userRoles);
    }
}
