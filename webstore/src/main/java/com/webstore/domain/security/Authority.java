package com.webstore.domain.security;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

/**
 * Created by arildbirkeland on 29.04.2017.
 */
public class Authority implements GrantedAuthority, Serializable {

    private static final long serialVersionUID = 213225235L;
    private final String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
