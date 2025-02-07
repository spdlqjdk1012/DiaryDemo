package com.example.demo.controller;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/diary")
public class DiaryController {
    @Autowired
    SqlSession sqlSession;

    @GetMapping("/getDiaries")
    public List<Map<String, Object>> getDiaries() {
        return sqlSession.selectList("diary.selectDiary");
    }    

    @PostMapping("/addDiary")
    public ResponseEntity<String> addDiary(@RequestBody Map<String, Object> diaryData) {
        sqlSession.insert("diary.insertDiary", diaryData);
        return ResponseEntity.ok("Success");
    }
}
