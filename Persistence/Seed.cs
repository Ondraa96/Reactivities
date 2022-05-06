using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser { DisplayName = "Tom", UserName = "tom", Email = "tom@test.com" },
                    new AppUser { DisplayName = "George", UserName = "george", Email = "george@test.com" },
                    new AppUser { DisplayName = "Sandra", UserName = "sandra", Email = "sandra@test.com" }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Minulá Aktivita 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activita měsíc zpět",
                    Category = "drinks",
                    City = "Německo",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Minulá Aktivita 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Activita 2 měsíce zpět",
                    Category = "culture",
                    City = "Praha",
                    Venue = "Pražský hrad",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Aktivita za měsíc v budoucnu",
                    Category = "culture",
                    City = "Londýn",
                    Venue = "Muzeum přírodní historie",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Aktivita za 2 měsíce v budoucnu",
                    Category = "music",
                    City = "Praha",
                    Venue = "O2 Arena",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Aktivita za 3 měsíce v budoucnu",
                    Category = "drinks",
                    City = "USA",
                    Venue = "Klub",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Aktivita za 4 měsíce v budoucnu",
                    Category = "drinks",
                    City = "Londýn",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Aktivita za 5 měsíců v budoucnu",
                    Category = "drinks",
                    City = "Brno",
                    Venue = "Vinný sklek",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Aktivita za 6 měsíců v budoucnu",
                    Category = "music",
                    City = "Plzeň",
                    Venue = "Chinasky",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Aktivita za 7 měsíců v budoucnu",
                    Category = "travel",
                    City = "Mariánské Lázně",
                    Venue = "Wellness",
                },
                new Activity
                {
                    Title = "Budoucí Aktivita 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Aktivita za 8 měsíců v budoucnu",
                    Category = "film",
                    City = "Praha",
                    Venue = "Kino",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}