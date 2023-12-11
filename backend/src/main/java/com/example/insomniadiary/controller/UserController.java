package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.domain.user.UserRepository;
import com.example.insomniadiary.domain.user.login.LoginService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;
    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password, HttpServletRequest request) {
        User loginUser = loginService.login(email, password);
        System.out.println("loginUser = " + loginUser);

        if (loginUser == null) {
            log.info("Login failed: email={}, password={}", email, password);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed: Your email or password is incorrect.");
        }

        HttpSession session = request.getSession();
        session.setAttribute("loginUser",loginUser);

        log.info("Login user = {}", loginUser);
        return ResponseEntity.ok("Login successful");
    }
}
