package net.harukusub.angularjs.userManage.dao;

import java.util.HashMap;
import java.util.List;

import net.harukusub.angularjs.userManage.controller.UserVO;

import org.springframework.stereotype.Repository;

@Repository
public interface UserManageDao {
	public List<?> userSelectList(HashMap<String, Object> paramMap);
	public int userInsert(HashMap<String, Object> paramMap);
	public HashMap<String, Object> userSelect(HashMap<String, Object> paramMap);
	public int userUpdate(UserVO userVO);
	public int userDelete(HashMap<String, Object> paramMap);
}
