const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(M)
//Will create the year
let year = moment().range('year')

//For each month of the year, print the days
_.forEach(Array.from(year.by('months')), month => {

    //prints the days of week
    console.log(_.pad(month.format('MMMM'), 26, ' - '))
    console.log('S   M   T   W   Th  F   S   ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()


    //Create an array of  days in the month - use Array.from(monthRange.by('days'))
    let days = Array.from(monthRange.by('days'))



    // Then, we'll perform several operations on this array of days

    let paddedDays = _.map(days, day => { // Transforms items in the array

        // let date = ' '
        // date = new Date('YYYYMMDDT0YYMMDD');
        // year = date.getFullYear();
        // month = date.getMonth() + 1; 
        // dt = date.getDate();

        // TODO: Change this to output a two-digit date use day.format()
         let date = day.format('DD')
        // TODO: Highlight September 10th in color         
        // TODO: Highlight YOUR birthday in color!
        if (day.month() == 8 && day.date() == 10) {
            date = chalk.bgRed(date)
               
        }
       else if (day.month() == 9 && day.date() == 20){
                date = chalk.bgBlue(date)
                
        }
       
        return _.padEnd(date, 2)
       
    })
    //TODO: create a for() loopthat loops through month.day()
    for (i = 0; i < month.day(); i++)

    {
             //TODO: Append blank spaces (using paddedDays.unshift('  ')) so that the 1st ends up under the right day column 
            paddedDays.unshift(' ');
       
    }
// Changes the array of days to be an array of weeks, each week containing 7 items from the days array [["  ","  ","  ",01,02,03,04],[05,06...]]
    paddedDays = _.chunk(paddedDays, 7) 


    paddedDays.forEach(week => {[01, 02, 03, 04, 05, 06, 07]
        //[ , , , 01, 02] 

        // TODO: Join the days together to form one string representing the week
        // TODO: 
            let wk = week.join(' ');
            console.log (wk)
          
         
    })

    console.log('') // Puts a blank line between each month
    // }})
  })


