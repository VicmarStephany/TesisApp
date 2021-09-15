import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { Courses } from 'src/app/utils/courses';
import { BasicI } from 'src/app/utils/payment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  student: any;

  public typeList: Array<BasicI> = Courses;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudent(3).subscribe(
      res => {
        console.log(res);
      }
    );

    this.studentService.getStudents().subscribe(
      res => {
        console.log(res);
      }
    )

  }

}
