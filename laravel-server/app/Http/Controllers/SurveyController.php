<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use App\Models\Question;
use Illuminate\Http\Request;
use Validator;

class SurveyController extends Controller{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['createNewSurvey','getAllSurveys','getSurvey']]);
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
    public function getSurvey(Request $request){
        $survey_id =  $request->survey_id;
        $survey_questions = Question::where('survey_id',$survey_id)->get();
        return response()->json([
            "status" => "Success",
            "questions" => $survey_questions
        ], 200);
    }

}
