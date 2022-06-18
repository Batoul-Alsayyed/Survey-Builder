<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/createNewSurvey', [SurveyController::class, 'createNewSurvey']);    
});
Route::get('/surveys', [SurveyController::class, 'getAllSurveys']);
