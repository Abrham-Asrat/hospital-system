import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-a-blog',
  imports: [CommonModule],
  templateUrl: './a-blog.component.html',
  styleUrl: './a-blog.component.css'
})

export class  ABlogComponent {
  blogs = [
    { id: 1, title: 'Heart Health Tips', author: 'Dr. John Doe', status: 'Pending' },
    { id: 2, title: 'How to Manage Diabetes', author: 'Dr. Jane Smith', status: 'Approved' },
    { id: 3, title: 'Mental Health Awareness', author: 'Dr. Emily Rose', status: 'Pending' },
    { id: 4, title: 'Healthy Eating Habits', author: 'Dr. Mike Tyson', status: 'Rejected' },
  ];

  approveBlog(blogId: number): void {
    const blog = this.blogs.find(b => b.id === blogId);
    if (blog) {
      blog.status = 'Approved';
    }
  }

  rejectBlog(blogId: number): void {
    const blog = this.blogs.find(b => b.id === blogId);
    if (blog) {
      blog.status = 'Rejected';
    }
  }

  deleteBlog(blogId: number): void {
    this.blogs = this.blogs.filter(b => b.id !== blogId);
  }
}
