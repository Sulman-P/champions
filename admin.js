const supabaseUrl = "https://ywywxtzkoevrlekzksjb.supabase.co"
const supabaseKey = "sb_publishable_rOO6y17Kc48f-wb6vcF26Q_xtbT3oCL"

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
)
async function createExam(){

const title = document.getElementById("examTitle").value
const subject = document.getElementById("examSubject").value
const time = document.getElementById("examTime").value
const description = document.getElementById("examDescription").value

const { data, error } = await supabaseClient
.from("exams")
.insert([
{
title: title,
subject: subject,
time_limit: time,
description: description,
exam_type: "online"
}
])

if(error){

alert(error.message)

}else{

alert("Exam Created")

loadExams()

}

}
