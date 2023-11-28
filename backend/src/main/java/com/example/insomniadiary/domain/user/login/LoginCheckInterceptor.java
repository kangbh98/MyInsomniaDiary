package com.example.insomniadiary.domain.user.login;

import com.example.insomniadiary.Constant;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        HttpSession session = request.getSession();


        if (session == null || session.getAttribute(Constant.LOGIN_USER) == null) {
            log.info("Unauthorized user request = {}", session);
            response.sendRedirect("/login");
            return false;
        }

        return true;
    }

}