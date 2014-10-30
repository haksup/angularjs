package net.harukusub.angularjs.userManage.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface UserManageService {
	public List userSelectList(HashMap<String, Object> paramMap);
	public int userInsert(HashMap<String, Object> paramMap);
	public HashMap<String, Object> userSelect(HashMap<String, Object> paramMap);
	public int userUpdate(HashMap<String, Object> paramMap);
	public int userDelete(HashMap<String, Object> paramMap);
}
