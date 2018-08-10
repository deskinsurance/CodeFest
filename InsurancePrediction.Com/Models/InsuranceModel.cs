using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InsurancePrediction.Com.Models
{
    public class InsuranceModel
    {
        public int age { get; set; }
        public string sex { get; set; }

        public float bmi { get; set; }
        public int children { get; set; }

        public string smoker { get; set; }
        public string region { get; set; }

        public decimal charges { get; set; }
    }
}