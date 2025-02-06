package com.example.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/diary")
public class DiaryController {
    @Autowired
    SqlSession sqlSession;

    @GetMapping("/joinProcess") //회원가입
    public String joinProcess (HttpServletRequest request){
        String id = request.getParameter("id");
        String pw = request.getParameter("pw");
        String name = request.getParameter("name");
        System.out.println(id);
        System.out.println(pw);
        System.out.println(name);

        Map<String, Object> in = new HashMap<>(); //데이터를 넣을박스
        //데이터를 받은 이후에 넣어야하니깐 디비밑에 입력
        //데이터를 넣음
        in.put("id", id);
        in.put("pw", pw);
        in.put("name", name);
        sqlSession.insert("my.insertMember", in); 
        return "redirect:/login"; // 이런건 컨트롤러 주소라고 한다.
    }
    @GetMapping("/getDiaries")
    public List<Map<String, Object>> getDiaries() {
        return sqlSession.selectList("diary.selectDiary");
    }    
}
