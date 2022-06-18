<?php

namespace App\Http\Controllers;
use App\Models\Question;
use Validator;
use Illuminate\Http\Request;

class QuestionController extends Controller{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['createNewQuestion']]);
    }
    public function createNewQuestion(Request $request) {
        $validator = Validator::make($request->all(), [
            'type' => 'required|string',
            'content' => 'required|string',
            'survey_id' => 'required|string',

        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $question = Question::create(array_merge(
                    $validator->validated(),
                ));
        return response()->json([
            'message' => 'Question successfully added',
            'question' => $question
        ], 201);
    }
}
