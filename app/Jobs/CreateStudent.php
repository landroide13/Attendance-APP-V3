<?php

namespace App\Jobs;

use App\Models\Student;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class CreateStudent implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $details;
    /**
     * Create a new job instance.
     */
    public function __construct(array $details)
    {
        $this->details = $details;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Student::create([
            'first_name' => $this ->details['first_name'],
            'last_name' => $this ->details['last_name'],
            'parent_email' => $this ->details['parent_email'],
            'parent_phone' => $this ->details['parent_phone'],
            'parent_name' => $this ->details['parent_name'],
            'parent_2_name' => $this ->details['parent_2_name'],
            'parent_2_phone' => $this -> details['parent_2_phone'],
            'parent_2_email' => $this -> details['parent_2_email'],
            'gender' => $this -> details['gender'],
            'school_thoughts' => $this -> details['school_thoughts'],
            'student_studying' => $this -> details['student_studying'],
            'aditional_info' => $this -> details['aditional_info'],
            'birth_date' => $this -> details['birth_date'],
        ]);
    }
}
