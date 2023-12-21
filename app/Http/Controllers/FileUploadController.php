<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\EnrolStudent;
use Illuminate\Http\Request;
use Dotenv\Store\File\Reader;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:csv|max:2048',
        ]);

        $file = $request->file('file');
        $path = $file->store('uploads');

        // Process the file...
        $csv = Reader::createFromPath($path);
        $csv->setHeaderOffset(1);

        // Open and read file, parse CSV, save to db.
       
        foreach ($csv as $record) {
            $student = new Student();
            $enrolStudent = new EnrolStudent();

            $student->fill($record);
            
            $student->save();
        }

        return response()->json(['message' => 'File uploaded successfully']);
    }
}
