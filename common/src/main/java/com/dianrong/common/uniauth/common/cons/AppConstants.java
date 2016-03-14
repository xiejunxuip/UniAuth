package com.dianrong.common.uniauth.common.cons;

/**
 * Created by Arc on 26/1/16.
 */
public interface AppConstants {
    Byte ZERO_Byte = (byte)0;
    Byte ONE_Byte = (byte)1;
    byte ZERO_byte = (byte)0;
    byte ONE_byte = (byte)1;

	String NODE_TYPE_GROUP = "grp";
	String NODE_TYPE_MEMBER_USER = "mUser";
	String NODE_TYPE_OWNER_USER = "oUser";

    String GRP_ROOT = "GRP_ROOT";
    byte MAX_AUTH_FAIL_COUNT = 10;
    int MAX_PASSWORD_VALID_MONTH = 2;
    String DOMAIN_CODE_TECHOPS = "techops";
    
	String ZK_DOMAIN_PREFIX = "domains.";
	String SERVICE_LOGIN_POSTFIX = "/login/cas";
	
	String ROLE_ADMIN = "ROLE_ADMIN";
	String ROLE_SUPER_ADMIN = "ROLE_SUPER_ADMIN";
	
	String AJAS_CROSS_HEADER = "Origin";
	String AJAS_HEADER = "X-Requested-With";
	String LOGIN_REDIRECT_URL = "LOGIN_REDIRECT_URL";
	String NO_PRIVILEGE = "NO_PRIVILEGE";

	String PERM_TYPE_DOMAIN_ID = "DOMAIN_ID";
	
	
	//constants for password forget
	
	//dispatcher parameter
	String PWDFORGET_DISPATCHER_STEP_KEY = "step";
	String CAS_CAPTCHA_SESSION_TYPE_KEY = "captchaType";
	
	//request
	String PWDFORGET_PAGE_VERIFY_CODE_CLIENT_KEY = "pageVerifyCode";
	String PWDFORGET_MAIL_VAL_CLIENT_KEY="email";
	String PWDFORGET_MAIL_VERIFY_CODE_CLIENT_KEY = "verifyCode";
	String PWDFORGET_NEW_PASSWORD_KEY = "newPassword";
	
	//session
	String CAS_CAPTCHA_SESSION_KEY = "CAS_CAPTCHA_SESSION_KEY";
	String PWDFORGET_MAIL_VAL_KEY = "pwdg_emailVal";
	String PWDFORGET_MAIL_VERIFY_CODE_KEY = "pwdg_verifyCode";
	String PWDFORGET_MAIL_VERIFY_EXPIRDATE_KEY = "pwdg_verifyExpirDate";
	
	//60 secondes
	long PWDFORGET_MAIL_VERIFY_CODE_EXPIRE_MILLES = 2L * 60L * 1000L;
	//5 minitues
	long PWDFORGET_MAIL_VERIFY_EXPIRDATE_MILLES = 5L * 60L * 1000L;

	String PERM_GROUP_OWNER = "PERM_GROUP_OWNER";
	
	String MAIL_PREFIX = "[TechOps]";
	int GLOBALVAR_QUEUE_SIZE = 2048;
	int AUDIT_INSERT_LIST_SIZE = 10;
	int AUDIT_INSERT_EXP_LENGTH = 3072;
	int AUDIT_INSET_PARAM_LENGTH = 256;
}
