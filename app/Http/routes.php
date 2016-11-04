<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //获取注册页面
    Route::get('reg','RegController@index');
    //进行注册信息并且调用二维码接口
    Route::post('reg','RegController@register');
    //注册成功页面
    Route::get('regsave','RegController@save');
    //邮箱跳转页面
    Route::get('regcg','RegController@confirm');
});
