import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/auth/auth';
import { Course } from 'src/app/models/course/course';
import { Chapter } from 'src/app/models/chapter/chapter';
import { UserService } from 'src/app/services/data/user.service';
import { CoursesService } from 'src/app/services/data/courses.service';
import { SubjectsService } from 'src/app/services/data/subjects.service';
import { SubscriptionService } from 'src/app/services/subscription/subscription-service.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'src/app/models/subject/subject';
import { Subscription } from 'src/app/models/subscription/subscription';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  user: User;
  course: Course;
  selectedSubject: string;
  chapters: Chapter[];

  selectedChapter: string;
  chapter: Chapter;

  loggedInUser: any;

  constructor(
    private readonly userService: UserService,
    private readonly courseService: CoursesService,
    private readonly subjectService: SubjectsService,
    private readonly subscription: SubscriptionService,
    private readonly authService: AuthService,
    private readonly jwtHelper: JwtHelperService
  ) {
    this.loggedInUser = jwtHelper.decodeToken(authService.getToken());
  }

  ngOnInit(): void {
    this.userService.getUser(this.loggedInUser.id).subscribe(
      (data: User) => {
        this.user = data
        this.getSubscriptionDetails(data.user_detail.subscription)
      },
      error => console.log(error)
    )
  }

  getSubscriptionDetails(id: number) {
    this.subscription.getSubscription(id).subscribe((data: Subscription) => {
      this.getCourseDetails(data.course.id);
    })
  }

  getCourseDetails(id: number) {
    this.courseService.getSingleCourse(id).subscribe((data: Course) => {
      this.course = data;
    }, (error) => console.log(error));
  }

  getChapters(id: number, name: string) {
    this.selectedSubject = name;
    this.subjectService.getSubjectDetail(id).subscribe((data: Subject) => {
      this.chapters = data.chapters;
    });
  }

  showChapterDetails(chapterName: string, chapterId: number) {
    this.chapter = null;
    this.selectedChapter = chapterName;
    this.subjectService.getSingleChapter(chapterId).subscribe((data: Chapter) => {
      this.chapter = data;
    });
  }

}
