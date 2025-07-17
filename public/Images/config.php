<?php

/**
 * Configuration for: Error reporting
 * Useful to show every little problem during development, but only show hard errors in production
 */
// error_reporting(E_ALL);
// ini_set("display_errors", 1);


/**
 * Configuration for: Base URL
 * This is the base url of our app. if you go live with your app, put your full domain name here.
 * if you are using a (different) port, then put this in here, like http://mydomain:8888/subfolder/
 * Note: The trailing slash is important!
 */
// define('URL', 'http://192.168.29.121/Harleen/ezyprojects/');
define('URL', 'https://powderblue-bear-942381.hostingersite.com/devezyprojects/'); 
// define('URL', 'http://ezyprojects.com/software/'); 

/**
 * Configuration for: Folders
 * Here you define where your folders are. Unless you have renamed them, there's no need to change this.
 */
define('LIBS_PATH', 'application/libs/');
define('CONTROLLER_PATH', 'application/controllers/');
define('MODELS_PATH', 'application/models/');
define('VIEWS_PATH', 'application/views/');
// don't forget to make this folder writable via chmod 775 or 777 (?)
// the slash at the end is VERY important!
define('UPLOAD_PATH', 'public/uploads/');
define('IMAGE_SIZE', 150);
define('IMAGE_JPEG_QUALITY', 85);
define('BLANK_MESSAGE', "Not Define");
define('DATE_FORMATE', "d/m/Y");
define('DISPLAY_DATE_FORMATE', "dS M, Y");

/**
 * Configuration for: Additional login providers: Facebook
 * Self-explaining. The FACEBOOK_LOGIN_PATH is the controller-action where the user is redirected to after getting
 * authenticated via Facebook. Leave it like that unless you know exactly what you do.
 */
define('FACEBOOK_LOGIN', false);
define('FACEBOOK_LOGIN_APP_ID', 'XXX');
define('FACEBOOK_LOGIN_APP_SECRET', 'XXX');
define('FACEBOOK_LOGIN_PATH', 'login/loginWithFacebook');
define('FACEBOOK_REGISTER_PATH', 'login/registerWithFacebook');

/**
 * Configuration for: Avatars/Gravatar support
 * Set to true if you want to use "Gravatar(s)", a service that automatically gets avatar pictures via using email
 * addresses of users by requesting images from the gravatar.com API. Set to false to use own locally saved avatars.
 * AVATAR_SIZE set the pixel size of avatars/gravatars (will be 44x44 by default). Avatars are always squares.
 * AVATAR_DEFAULT_IMAGE is the default image in public/avatars/
 */
define('AVATAR_PATH', 'public/avatars/');
define('USE_GRAVATAR', false);
define('AVATAR_SIZE', 44);
define('AVATAR_JPEG_QUALITY', 85);
define('AVATAR_DEFAULT_IMAGE', 'default.jpg');

/**
 * Configuration for: Cookies
 * Please note: The COOKIE_DOMAIN needs the domain where your app is,
 * in a format like this: .mydomain.com
 * Note the . in front of the domain. No www, no http, no slash here!
 * For local development .127.0.0.1 is fine, but when deploying you should
 * change this to your real domain, like '.mydomain.com' ! The leading dot makes the cookie available for
 * sub-domains too.
 * @see http://stackoverflow.com/q/9618217/1114320
 * @see php.net/manual/en/function.setcookie.php
 */
// 1209600 seconds = 2 weeks
define('COOKIE_RUNTIME', 1209600);
// the domain where the cookie is valid for, for local development ".127.0.0.1" and ".localhost" will work
// IMPORTANT: always put a dot in front of the domain, like ".mydomain.com" !
// define('COOKIE_DOMAIN', '.ezyprojects.com',true);

/**
 * Configuration for: Database
 * This is the place where you define your database credentials, type etc.
 *
 * database type
 * define('DB_TYPE', 'mysql');
 * database host, usually it's "127.0.0.1" or "localhost", some servers also need port info, like "127.0.0.1:8080"
 * define('DB_HOST', '127.0.0.1');
 * name of the database. please note: database and database table are not the same thing!
 * define('DB_NAME', 'login');
 * user for your database. the user needs to have rights for SELECT, UPDATE, DELETE and INSERT
 * By the way, it's bad style to use "root", but for development it will work
 * define('DB_USER', 'root');
 * The password of the above user
 * define('DB_PASS', 'xxx');
 */
 
// define('DB_TYPE', 'mysql');
// define('DB_HOST', 'localhost');
// //define('DB_NAME', 'hrmapplication');
// define('DB_NAME', 'ezysoft'); //ubiproject
// define('DB_USER', 'root');
// define('DB_PASS', 'gravipass');

define('DB_TYPE', 'mysql');
define('DB_HOST', 'localhost');
//define('DB_NAME', 'hrmapplication');
define('DB_NAME', 'u792368195_ezyproj_dev'); //ubiproject
define('DB_USER', 'u792368195_ezyproj_dev');
define('DB_PASS', 'kWzkbT4]');


// the hash cost factor, PHP's internal default is 10. You can leave this line
// commented out until you need another factor then 10.
define("HASH_COST_FACTOR", "10");

/**
 * Configuration for: Email server credentials
 *
 * Here you can define how you want to send emails.
 * If you have successfully set up a mail server on your linux server and you know
 * what you do, then you can skip this section. Otherwise please set EMAIL_USE_SMTP to true
 * and fill in your SMTP provider account data.
 *
 * An example setup for using gmail.com [Google Mail] as email sending service,
 * works perfectly in August 2013. Change the "xxx" to your needs.
 * Please note that there are several issues with gmail, like gmail will block your server
 * for "spam" reasons or you'll have a daily sending limit. See the readme.md for more info.
 *
 * define("PHPMAILER_DEBUG_MODE", 0);
 * define("EMAIL_USE_SMTP", true);
 * define("EMAIL_SMTP_HOST", 'ssl://smtp.gmail.com');
 * define("EMAIL_SMTP_AUTH", true);
 * define("EMAIL_SMTP_USERNAME", 'xxxxxxxxxx@gmail.com');
 * define("EMAIL_SMTP_PASSWORD", 'xxxxxxxxxxxxxxxxxxxx');
 * define("EMAIL_SMTP_PORT", 465);
 * define("EMAIL_SMTP_ENCRYPTION", 'ssl');
 *
 * It's really recommended to use SMTP!
 */
// Options: 0 = off, 1 = commands, 2 = commands and data, perfect to see SMTP errors, see the PHPMailer manual for more
define("PHPMAILER_DEBUG_MODE", 0);
// use SMTP or basic mail() ? SMTP is strongly recommended
define("EMAIL_USE_SMTP", true);
// leave this true until your SMTP can be used without login
define("EMAIL_SMTP_AUTH", true);
// SMTP encryption, usually SMTP providers use "tls" or "ssl", for details see the PHPMailer manual
define("EMAIL_SMTP_ENCRYPTION", 'tls');

/* // name of your host
define("EMAIL_SMTP_HOST", 'smtp.gmail.com');
// SMTP provider username
define("EMAIL_SMTP_USERNAME", 'cpsharma.graviti@gmail.com');
// SMTP provider password
define("EMAIL_SMTP_PASSWORD", 'sharmacp123');
// SMTP provider port
define("EMAIL_SMTP_PORT", 465); */


define("EMAIL_SMTP_HOST", 'smtp.gmail.com');
define("EMAIL_SMTP_USERNAME", 'ezyprojects.software@gmail.com');
define("EMAIL_SMTP_PASSWORD", 'jmgguamnqohyiefu');
define("EMAIL_SMTP_PORT", 587);

// define("EMAIL_SMTP_HOST", 'smtp.hostinger.com');
// define("EMAIL_SMTP_USERNAME", 'system@ezyProjects.com');
// define("EMAIL_SMTP_PASSWORD", 'Gravipass@2024');
// define("EMAIL_SMTP_PORT", 465);


// define("ADMIN_EMAIL_ADDRESS", 'gravitisys@gmail.com');
define("ADMIN_EMAIL_ADDRESS", 'chhotelaljatav143@gmail.com');
/**
 * Configuration for: Email content data
 *
 * php-login uses the PHPMailer library, please have a look here if you want to add more
 * config stuff: @see https://github.com/PHPMailer/PHPMailer
 *
 * As email sending within your project needs some setting, you can do this here:
 *
 * Absolute URL to password reset action, necessary for email password reset links
 * define("EMAIL_PASSWORD_RESET_URL", "http://127.0.0.1/php-login/4-full-mvc-framework/login/passwordReset");
 * define("EMAIL_PASSWORD_RESET_FROM_EMAIL", "noreply@example.com");
 * define("EMAIL_PASSWORD_RESET_FROM_NAME", "My Project");
 * define("EMAIL_PASSWORD_RESET_SUBJECT", "Password reset for PROJECT XY");
 * define("EMAIL_PASSWORD_RESET_CONTENT", "Please click on this link to reset your password:");
 *
 * absolute URL to verification action, necessary for email verification links
 * define("EMAIL_VERIFICATION_URL", "http://127.0.0.1/php-login/4-full-mvc-framework/login/verify/");
 * define("EMAIL_VERIFICATION_FROM_EMAIL", "noreply@example.com");
 * define("EMAIL_VERIFICATION_FROM_NAME", "My Project");
 * define("EMAIL_VERIFICATION_SUBJECT", "Account Activation for PROJECT XY");
 * define("EMAIL_VERIFICATION_CONTENT", "Please click on this link to activate your account:");
 */
define("EMAIL_PASSWORD_RESET_URL", URL . "login/verifypasswordreset");
define("EMAIL_PASSWORD_RESET_FROM_EMAIL", "no-reply@example.com");
define("EMAIL_PASSWORD_RESET_FROM_NAME", "My Project");
define("EMAIL_PASSWORD_RESET_SUBJECT", "Password reset for PROJECT XY");
define("EMAIL_PASSWORD_RESET_CONTENT", "Please click on this link to reset your password: ");

define("EMAIL_VERIFICATION_URL", URL . "login/verify");
define("EMAIL_VERIFICATION_FROM_EMAIL", "no-reply@example.com");
define("EMAIL_VERIFICATION_FROM_NAME", "My Project");
define("EMAIL_VERIFICATION_SUBJECT", "Account activation for PROJECT XY");
define("EMAIL_VERIFICATION_CONTENT", "Please click on this link to activate your account: ");

/**
 * Configuration for: Error messages and notices
 *
 * In this project, the error messages, notices etc are all-together called "feedback".
 */
define("FEEDBACK_UNKNOWN_ERROR", "Unknown error occurred!");
define("FEEDBACK_PASSWORD_WRONG_3_TIMES", "You have typed in a wrong password 3 or more times already. Please wait 30 seconds to try again.");
define("FEEDBACK_ACCOUNT_NOT_ACTIVATED_YET", "Your account is not activated yet. Please click on the confirm link in the mail.");
define("FEEDBACK_PASSWORD_WRONG", "Password was wrong.");
define("FEEDBACK_USER_DOES_NOT_EXIST", "This user does not exist.");
// The "login failed"-message is a security improved feedback that doesn't show a potential attacker if the user exists or not
define("FEEDBACK_LOGIN_FAILED", "Login failed.");
define("FEEDBACK_USERNAME_FIELD_EMPTY", "Username field was empty.");
define("FEEDBACK_PASSWORD_FIELD_EMPTY", "Password field was empty.");
define("FEEDBACK_EMAIL_FIELD_EMPTY", "Email and passwords fields were empty.");
define("FEEDBACK_EMAIL_AND_PASSWORD_FIELDS_EMPTY", "Email field was empty.");
define("FEEDBACK_USERNAME_SAME_AS_OLD_ONE", "Sorry, that username is the same as your current one. Please choose another one.");
define("FEEDBACK_USERNAME_ALREADY_TAKEN", "Sorry, that username is already taken. Please choose another one.");
define("FEEDBACK_USER_EMAIL_ALREADY_TAKEN", "Sorry, that email is already in use. Please choose another one.");
define("FEEDBACK_USERNAME_CHANGE_SUCCESSFUL", "Your username has been changed successfully.");
define("FEEDBACK_USERNAME_AND_PASSWORD_FIELD_EMPTY", "Username and password fields were empty.");
define("FEEDBACK_USERNAME_DOES_NOT_FIT_PATTERN", "Username does not fit the name scheme: only a-Z and numbers are allowed, 2 to 64 characters.");
define("FEEDBACK_EMAIL_DOES_NOT_FIT_PATTERN", "Sorry, your chosen email does not fit into the email naming pattern.");
define("FEEDBACK_EMAIL_SAME_AS_OLD_ONE", "Sorry, that email address is the same as your current one. Please choose another one.");
define("FEEDBACK_EMAIL_CHANGE_SUCCESSFUL", "Your email address has been changed successfully.");
define("FEEDBACK_CAPTCHA_WRONG", "The entered captcha security characters were wrong.");
define("FEEDBACK_PASSWORD_REPEAT_WRONG", "Password and password repeat are not the same.");
define("FEEDBACK_PASSWORD_TOO_SHORT", "Password has a minimum length of 6 characters.");
define("FEEDBACK_USERNAME_TOO_SHORT_OR_TOO_LONG", "Username cannot be shorter than 2 or longer than 64 characters.");
define("FEEDBACK_EMAIL_TOO_LONG", "Email cannot be longer than 64 characters.");
define("FEEDBACK_ACCOUNT_SUCCESSFULLY_CREATED", "Your account has been created successfully and we have sent you an email. Please click the VERIFICATION LINK within that mail.");
define("FEEDBACK_VERIFICATION_MAIL_SENDING_FAILED", "Sorry, we could not send you an verification mail. Your account has NOT been created.");
define("FEEDBACK_ACCOUNT_CREATION_FAILED", "Sorry, your registration failed. Please go back and try again.");
define("FEEDBACK_VERIFICATION_MAIL_SENDING_ERROR", "Verification mail could not be sent due to: ");
define("FEEDBACK_VERIFICATION_MAIL_SENDING_SUCCESSFUL", "A verification mail has been sent successfully.");
define("FEEDBACK_ACCOUNT_ACTIVATION_SUCCESSFUL", "Activation was successful! You can now log in.");
define("FEEDBACK_ACCOUNT_ACTIVATION_FAILED", "Sorry, no such id/verification code combination here...");
define("FEEDBACK_AVATAR_UPLOAD_SUCCESSFUL", "Avatar upload was successful.");
define("FEEDBACK_AVATAR_UPLOAD_WRONG_TYPE", "Only JPEG and PNG files are supported.");
define("FEEDBACK_AVATAR_UPLOAD_TOO_SMALL", "Avatar source file's width/height is too small. Needs to be 100x100 pixel minimum.");
define("FEEDBACK_AVATAR_UPLOAD_TOO_BIG", "Avatar source file is too big. 5 Megabyte is the maximum.");
define("FEEDBACK_AVATAR_FOLDER_DOES_NOT_EXIST_OR_NOT_WRITABLE", "Avatar folder does not exist or is not writable. Please change this via chmod 775 or 777.");
define("FEEDBACK_AVATAR_IMAGE_UPLOAD_FAILED", "Something went wrong with the image upload.");
define("FEEDBACK_PASSWORD_RESET_TOKEN_FAIL", "Could not write token to database.");
define("FEEDBACK_PASSWORD_RESET_TOKEN_MISSING", "No password reset token.");
define("FEEDBACK_PASSWORD_RESET_MAIL_SENDING_ERROR", "Password reset mail could not be sent due to: ");
define("FEEDBACK_PASSWORD_RESET_MAIL_SENDING_SUCCESSFUL", "A password reset mail has been sent successfully.");
define("FEEDBACK_PASSWORD_RESET_LINK_EXPIRED", "Your reset link has expired. Please use the reset link within one hour.");
define("FEEDBACK_PASSWORD_RESET_COMBINATION_DOES_NOT_EXIST", "Username/Verification code combination does not exist.");
define("FEEDBACK_PASSWORD_RESET_LINK_VALID", "Password reset validation link is valid. Please change the password now.");
define("FEEDBACK_PASSWORD_CHANGE_SUCCESSFUL", "Password successfully changed.");
define("FEEDBACK_PASSWORD_CHANGE_FAILED", "Sorry, your password changing failed.");
define("FEEDBACK_ACCOUNT_UPGRADE_SUCCESSFUL", "Account upgrade was successful.");
define("FEEDBACK_ACCOUNT_UPGRADE_FAILED", "Account upgrade failed.");
define("FEEDBACK_ACCOUNT_DOWNGRADE_SUCCESSFUL", "Account downgrade was successful.");
define("FEEDBACK_ACCOUNT_DOWNGRADE_FAILED", "Account downgrade failed.");

define("FEEDBACK_COOKIE_INVALID", "Your remember-me-cookie is invalid.");
define("FEEDBACK_COOKIE_LOGIN_SUCCESSFUL", "You were successfully logged in via the remember-me-cookie.");


define("FEEDBACK_IMAGE_UPLOAD_SUCCESSFUL", "Upload was successful.");
define("FEEDBACK_IMAGE_UPLOAD_WRONG_TYPE", "Only JPEG and PNG files are supported.");
define("FEEDBACK_IMAGE_UPLOAD_TOO_SMALL", "Image source file's width/height is too small. Needs to be 150x150 pixel minimum.");
define("FEEDBACK_IMAGE_UPLOAD_TOO_BIG", "Source file is too big. 5 Megabyte is the maximum.");
define("FEEDBACK_IMAGE_FOLDER_DOES_NOT_EXIST_OR_NOT_WRITABLE", "Image folder does not exist or is not writable. Please change this via chmod 775 or 777.");
define("FEEDBACK_IMAGE_UPLOAD_FAILED", "Something went wrong with the image upload.");

define("FEEDBACK_PREFIX_ALREADY_EXISTS_TRY_ANOTHER_ONE", "Prefix is already exists please try another one.");
define("FEEDBACK_PROJECT_ADDITION_FAILED", "Project addition failed.");
define("FEEDBACK_PROJECT_ADDITION_SUCCESSFUL", "Project addition successfull.");
define("FEEDBACK_PROJECT_EDITING_FAILED", "Project editing failed.");
define("FEEDBACK_PROJECT_EDITING_SUCCESSFUL", "Project editing successfull.");
define("FEEDBACK_PROJECT_DELETION_FAILED", "Project deletion failed.");
define("FEEDBACK_PROJECT_DELETION_SUCCESSFUL", "Project deletion successfull.");
define("FEEDBACK_PROJECT_CHANGE_STATUS_FAILED", "Project status change failed.");
define("FEEDBACK_PROJECT_CHANGE_STATUS_SUCCESSFUL", "Project status change successfull.");
define("FEEDBACK_IMAGE_SIZE_FAILED","File uploaded exceeds maximum upload size.");
define("FEEDBACK_FILE_EXISTS_FAILED","File with that name already exists.");
define("FEEDBACK_FILE_UPLOAD_FAILED","Error uploading file - check destination is writeable.");
define("FEEDBACK_DATE_FAILED","start date should be less than end date.");
define("FEEDBACK_PROJECT_RETRIEVTION_SUCCESSFUL","Project successfully retrieved.");
define("FEEDBACK_PROJECT_RETRIEVTION_FAILED","Error while retrieving projecct.");
define("FEEDBACK_PROJECT_LIMIT_EXCEEDED", "Project creation limit exceeded.");


define("FEEDBACK_TIMESHEET_ADDITION_FAILED", "Time addition failed.");
define("FEEDBACK_TIMESHEET_ADDITION_SUCCESSFUL", "Time addition successfull.");
define("FEEDBACK_TIMESHEET_EDITING_FAILED", "Time editing failed.");
define("FEEDBACK_TIMESHEET_EDITING_SUCCESSFUL", "Time editing successfull.");
define("FEEDBACK_TIMESHEET_DELETION_FAILED", "Time deletion failed.");
define("FEEDBACK_TIMESHEET_DELETION_SUCCESSFUL", "Time deletion successfull.");
define("FEEDBACK_TIMESHEET_CHANGE_STATUS_FAILED", "Time status change failed.");
define("FEEDBACK_TIMESHEET_CHANGE_STATUS_SUCCESSFUL", "Time status change successfull.");


define("FEEDBACK_TASK_ADDITION_FAILED", "Task addition failed.");
define("FEEDBACK_TASK_ADDITION_SUCCESSFUL", "Task addition successfull.");
define("FEEDBACK_TASK_EDITING_FAILED", "Task editing failed.");
define("FEEDBACK_TASK_EDITING_SUCCESSFUL", "Task editing successfull.");
define("FEEDBACK_TASK_DELETION_FAILED", "Task deletion failed.");
define("FEEDBACK_TASK_DELETION_SUCCESSFUL", "Task deletion successfull.");
define("FEEDBACK_TASK_CHANGE_STATUS_FAILED", "Task status change failed.");
define("FEEDBACK_TASK_CHANGE_STATUS_SUCCESSFUL", "Task status change successfull.");
define("FEEDBACK_TASK_LIMIT_EXCEEDED", "Task creation limit exceeded.");


define("FEEDBACK_BUG_ADDITION_FAILED", "Bug addition failed.");
define("FEEDBACK_BUG_ADDITION_SUCCESSFUL", "Bug addition successfull.");
define("FEEDBACK_BUG_EDITING_FAILED", "Bug editing failed.");
define("FEEDBACK_BUG_EDITING_SUCCESSFUL", "Bug editing successfull.");
define("FEEDBACK_BUG_DELETION_FAILED", "Bug deletion failed.");
define("FEEDBACK_BUG_DELETION_SUCCESSFUL", "Bug deletion successfull.");
define("FEEDBACK_BUG_CHANGE_STATUS_FAILED", "Bug status change failed.");
define("FEEDBACK_BUG_CHANGE_STATUS_SUCCESSFUL", "Bug status change successfull.");
define("FEEDBACK_USER_BUG_EXCEEDED", "Bug creation limit exceeded.");


define("FEEDBACK_USER_ADDITION_FAILED", "User addition failed.");
define("FEEDBACK_USER_ADDITION_SUCCESSFUL", "User addition successfull.");
define("FEEDBACK_USER_EDITING_FAILED", "User editing failed.");
define("FEEDBACK_USER_EDITING_SUCCESSFUL", "User editing successfull.");
define("FEEDBACK_USER_DELETION_FAILED", "User deletion failed.");
define("FEEDBACK_USER_DELETION_SUCCESSFUL", "User deletion successfull.");
define("FEEDBACK_USER_CHANGE_STATUS_FAILED", "User status change failed.");
define("FEEDBACK_USER_CHANGE_STATUS_SUCCESSFUL", "User status change successfull.");
define("FEEDBACK_USER_LIMIT_EXCEEDED", "User creation limit exceeded.");

define("FEEDBACK_GROUP_ADDITION_FAILED", "Group addition failed.");
define("FEEDBACK_GROUP_ADDITION_SUCCESSFUL", "Group addition successfull.");
define("FEEDBACK_GROUP_EDITING_FAILED", "Group editing failed.");
define("FEEDBACK_GROUP_EDITING_SUCCESSFUL", "Group editing successfull.");
define("FEEDBACK_GROUP_DELETION_FAILED", "Group deletion failed.");
define("FEEDBACK_GROUP_DELETION_SUCCESSFUL", "Group deletion successfull.");
define("FEEDBACK_GROUP_CHANGE_STATUS_FAILED", "Group status change failed.");
define("FEEDBACK_GROUP_CHANGE_STATUS_SUCCESSFUL", "Group status change successfull.");

define("FEEDBACK_MILESTONE_ADDITION_FAILED", "Milestone addition failed.");
define("FEEDBACK_MILESTONE_ADDITION_SUCCESSFUL", "Milestone addition successfull.");
define("FEEDBACK_MILESTONE_EDITING_FAILED", "Milestone editing failed.");
define("FEEDBACK_MILESTONE_EDITING_SUCCESSFUL", "Milestone editing successfull.");
define("FEEDBACK_MILESTONE_DELETION_FAILED", "Milestone deletion failed.");
define("FEEDBACK_MILESTONE_DELETION_SUCCESSFUL", "Milestone deletion successfull.");
define("FEEDBACK_MILESTONE_CHANGE_STATUS_FAILED", "Milestone status change failed.");
define("FEEDBACK_MILESTONE_CHANGE_STATUS_SUCCESSFUL", "Milestone status change successfull.");
define("FEEDBACK_MILESTONE_LIMIT_EXCEEDED", "Milestone limit exceeded.");


