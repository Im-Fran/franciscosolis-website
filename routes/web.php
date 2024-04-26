<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)
    ->name('home');
Route::get('/about', HomeController::class)
    ->name('about');

foreach (glob(__DIR__.'/web/*.php') as $filename) {
    require $filename;
}
