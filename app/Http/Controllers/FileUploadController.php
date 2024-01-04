<?php

namespace App\Http\Controllers;

use App\Models\Student;

use Illuminate\Http\Request;
use Dotenv\Store\File\Reader;
use Illuminate\Support\Facades\DB;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:csv|max:2048',
        ]);

        $file = $request->file('file');

        // Open and read file, parse CSV, save to db.
        if (($handle = fopen($file->getRealPath(), 'r')) !== false) {
            DB::beginTransaction();
            try {
                while (($data = fgetcsv($handle, 1000, ',')) !== false) {
                    //Format: Name, Email, Phone, Gender, Subject
                    $studentData = [
                        'first_name' => $data[0],
                        'last_name' => $data[1],
                        'gender' => $data[2],
                        'parent_email' => $data[3],
                        'parent_phone' => $data[4],
                        'parent_name' => $data[5],
                        'parent_2_name' => $data[6],
                        'parent_2_phone' => $data[7],
                        'parent_2_email' => $data[8],
                        'school_thoughts' => $data[9],
                        'student_studying' => $data[10],
                        'aditional_info' => $data[11],
                        'birth_date' => $data[12],
                    ];
                    //$subjectName = $data[4];

                    //$subject = Subject::firstOrCreate(['name' => $subjectName]);
                    //$studentData['subject_id'] = $subject->id;

                    Student::updateOrCreate(['email' => $studentData['email']], $studentData);
                }
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                // Handle exception
            }
            fclose($handle);
        }

        return response()->json(['message' => 'File Uploaded successfully']);
    }
}
