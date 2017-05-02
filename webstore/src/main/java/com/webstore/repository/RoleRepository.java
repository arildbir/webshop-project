package com.webstore.repository;

import com.webstore.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by arildbirkeland on 29.04.2017.
 */
public interface RoleRepository extends CrudRepository<Role, Long> {


}
