<?php

namespace App\Services;

use App\Models\Role;

class RoleService
{
    public function store(array $details):Role
    {
        $role = Role::create([
            'name' => $details['name'],
        ]);
   
        return $role;
    }

    public function update(array $details):Role
    {
        $status = Role::update([
            'name' => $role['name'],
        ]);

        return $role;
    }
    

}