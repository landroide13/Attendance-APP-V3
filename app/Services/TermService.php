<?php

namespace App\Services;

use App\Models\Term;

class TermService
{
    public function store(array $details):Term
    {
        $term = Term::create([
            'year' => $details['year'],
            'term' => $details['term'],
        ]);
   
        return $term;
    }

}    