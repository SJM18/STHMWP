using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace STHMWP.Controllers
{
    public class JSONController : Controller
    {
        // GET: JSON
        public ActionResult Index()
        {
            return View();
        }

        // GET: JSON/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: JSON/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: JSON/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: JSON/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: JSON/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: JSON/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: JSON/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
