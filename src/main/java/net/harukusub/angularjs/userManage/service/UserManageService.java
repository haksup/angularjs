package net.harukusub.angularjs.userManage.service;

import java.util.HashMap;
import java.util.List;

import net.harukusub.angularjs.userManage.controller.UserVO;

public interface UserManageService {
	public List userSelectList(HashMap<String, Object> paramMap);
	public int userInsert(HashMap<String, Object> paramMap);
	public HashMap<String, Object> userSelect(HashMap<String, Object> paramMap);
	public int userUpdate(UserVO userVo);
	public int userDelete(HashMap<String, Object> paramMap);
}
