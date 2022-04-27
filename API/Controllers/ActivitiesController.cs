﻿using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Activity>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }    
        
        [HttpGet("{id}")]
        public async Task<Activity> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}
