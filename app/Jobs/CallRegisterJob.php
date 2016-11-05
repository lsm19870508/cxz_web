<?php

namespace App\Jobs;

use GuzzleHttp\Client;
use App\Jobs\Job;

class CallRegisterJob extends Job
{
    protected $user = null;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user_info)
    {
        //
        $this->user = $user_info;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
        //
        $client = new Client();

        $response = $client->request('POST', 'http://server.ipollycat.com:18500/register', [
            'query' => 'userinfo='.json_encode($this->user)
        ]);

        $statusCode = $response->getStatusCode();
        $result = [];

        // 操作成功
        if ($statusCode == 200) {
            // 拆解结果集
//            result=0&message=短信发送成功&smsid=
//            result：结果码，0表示成功，其他表示失败
//            message：结果码解释
//            smsid：短信包ID
            $r = json_decode((string)$response->getBody());
            $result['code'] = $r->code;
            $result['reason'] = $r->msg;
        } else {
            $result['code'] = $statusCode;
            $result['reason'] = $response->getReasonPhrase();
        }

        return $result;

    }
}
