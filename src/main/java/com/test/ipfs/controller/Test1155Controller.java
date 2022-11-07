package com.test.ipfs.controller;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.test.ipfs.IPFSUtil;

import io.ipfs.api.IPFS;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/ryf/test1155")
@Slf4j
@CrossOrigin
public class Test1155Controller {
	
	@Autowired
	IPFSUtil iPFSUtil;
	IPFS ipfsClien;
	
	@PostConstruct
	void init(){
		log.info("===========初始化ipfs客户端：准备");
		ipfsClien = new IPFS("/ip4/183.252.17.149/tcp/5001"); 
		log.info("===========初始化ipfs客户端：完成");
	}
	
	@RequestMapping("/hello")
	@ResponseBody
	public Object hello() {
		return "hello test ERC1155";
	}
	
	
	@RequestMapping("/")
	public Object index() {
		return "index";
	}
	
	
	
	@RequestMapping("/uploadToIpfs")
	@ResponseBody
	public Object uploadIpfs(MultipartFile file,String name,Integer num) throws IOException {
    	byte[] bytes = file.getBytes();
		try {
			String imageHash = iPFSUtil.upload(ipfsClien, bytes);
			JSONObject json=new JSONObject();
			json.put("name", name);
			json.put("image", imageHash);
//			String originalFilename = file.getOriginalFilename();
//			json.put("imageName", originalFilename);
			json.put("num", num);
			String jsonHash = iPFSUtil.upload(ipfsClien, json.toJSONString().getBytes());
			json=new JSONObject();
			json.put("imageHash", imageHash);
			json.put("tokenURI", jsonHash);
			return json;
		} catch (IOException e) {
			log.error("上传资源失败：",e);
			JSONObject res=new JSONObject();
			res.put("msg", "上传资源失败："+e.getMessage());
			return res;
		}
	}
	
	@RequestMapping("/downloadFromIpfs")
	@ResponseBody
	public Object downloadFromIpfs(@RequestBody String[] tokenURIs,HttpServletResponse response) throws IOException {
		List<JSONObject> list=new ArrayList<>();
		for (String tokenURI : tokenURIs) {
			if(StringUtils.isEmpty(tokenURI)) {
				continue;
			}
			byte[] jsonByte = iPFSUtil.download(ipfsClien, tokenURI);
			JSONObject json=JSONObject.parseObject(new String(jsonByte));
//			json.put("owners", tokenURI);
			list.add(json);
		}
		return list;
	}
	
	@RequestMapping("/downloadImgFromIpfs")
	@ResponseBody
	public void downloadImgFromIpfs(String imgURI,HttpServletResponse response) throws IOException {
		byte[] fileByte = iPFSUtil.download(ipfsClien, imgURI);
		try(ServletOutputStream out = response.getOutputStream();){
			response.setContentType("image/png;charset=UTF-8");
			response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(imgURI+".png", "UTF-8"));
			out.write(fileByte);
		}
		
	}

}
