<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class RegisterRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'email'=>'required | between:1,20 | email',
            'name'=>'required | between:4,12',
            'password'=>'required',
            'age'=>'required | numeric',
            'phone'=>'required | regex:/^1[34578][0-9]{9}$/',
            'address'=>'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(){
        return [
            'email.required' => '请输入邮箱',
            'email.max' => '邮箱长度超限',
            'email.email' => '不是合法的邮箱格式',
            'name.required'  => '请输入用户名',
            'name.between' => '用户名长度在4-12之间',
            'password.required' => '请输入密码',
            'age.required' => '请输入年龄',
            'phone.required' => '请输入手机号',
            'phone.regex'=> '手机号不合法',
            'address.required' => '请输入地址',
        ];
    }
}
