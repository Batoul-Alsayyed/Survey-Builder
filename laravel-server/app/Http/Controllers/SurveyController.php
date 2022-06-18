<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use Illuminate\Http\Request;
use Validator;

class SurveyController extends Controller{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['createNewSurvey','getAllSurveys']]);
    }
    public function createNewSurvey(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',

        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $survey = Survey::create(array_merge(
                    $validator->validated(),
                ));
        return response()->json([
            'message' => 'survey successfully registered',
            'survey' => $survey
        ], 201);
    }
    public function getAllSurveys(){
        $surveys = Survey::all();
        
        return response()->json([
            "status" => "Success",
            "surveys" => $surveys
        ], 200);
    }

}
