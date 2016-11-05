<?php

namespace App\Http\Controllers;

use App\Jobs\CallRegisterJob;
use App\Moloquent\Register;
use Illuminate\Http\Request;

use App\Http\Requests;

class RegController extends Controller
{
    //展示注册页
    public function index()
    {
        return view('reg/reg');
    }

    //进行注册处理
    public function register(Requests\RegisterRequest $request)
    {
        $register = new \stdClass();
        $register->email = $request->get('email');
        $register->name = $request->get('name');
        $register->password = $request->get('password');
        $register->age = $request->get('age');
        $register->phone = $request->get('phone');
        $register->address = $request->get('address');
        $result = $this->dispatch(new CallRegisterJob($register));
        var_dump($result);
        if ($result['reason'] == '110') {
            return redirect()->back()->withErrors("此邮箱已注册!");
        } else if ($result['code'] != '0') {
            return redirect()->back()->withErrors("接口错误!");
        }
        return redirect('/regsave');
    }

    //展示注册成功页面
    public function save()
    {
        return view('reg/regsave');
    }

    //展示验证成功页面
    public function confirm()
    {
        return view('reg/regcg');
    }
}
