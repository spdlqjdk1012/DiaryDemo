package com.example.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    //list
    @GetMapping("/getDiaries")
    public List<Map<String, Object>> getDiaries() {
        return sqlSession.selectList("diary.selectDiary");
    }    

    //insert
    @PostMapping("/addDiary")
    public ResponseEntity<String> addDiary(@RequestBody Map<String, Object> diaryData) {
        sqlSession.insert("diary.insertDiary", diaryData);
        return ResponseEntity.ok("Success");
    }

    //select
    @GetMapping("/getDiary/{id}")
    public ResponseEntity<Map<String, Object>> getDiary(@PathVariable Long id) {
        try {
            Map<String, Object> param = new HashMap<>();
            param.put("id", id);
            Map<String, Object> diary = sqlSession.selectOne("diary.selectDiaryById", param);
            return ResponseEntity.ok(diary);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }   

    //update
    @PostMapping("/updateDiary/{id}")
    public ResponseEntity<String> updateDiary(@PathVariable Long id, @RequestBody Map<String, Object> diaryData) {
        diaryData.put("id", id);
        sqlSession.update("diary.updateDiary", diaryData);
        return ResponseEntity.ok("Success");
    }

}
