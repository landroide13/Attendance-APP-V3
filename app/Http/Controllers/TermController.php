<?php

namespace App\Http\Controllers;

use App\Models\Term;
use Illuminate\Http\Request;
use App\Services\TermService;
use App\Http\Requests\TermRequest;
use App\Http\Resources\TermResource;

class TermController extends Controller
{
    
    public function index()
    {
        return TermResource::collection(Term::latest()->get());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(TermRequest $request, TermService $service)
    {
        $newTerm = $service ->store($request->validated());

        return response('Term created successfully', 203);
    }
}
