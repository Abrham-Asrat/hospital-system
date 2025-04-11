// blog-moderation.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-blog-moderation',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './blog-moderation.component.html',
  styleUrls: ['./blog-moderation.component.scss']
})
export class BlogModerationComponent {
  blogs = [
    { id: 1, title: 'Heart Health Tips', author: 'Dr. John Doe', status: 'Pending' },
    { id: 2, title: 'How to Manage Diabetes', author: 'Dr. Jane Smith', status: 'Approved' },
    { id: 3, title: 'Mental Health Awareness', author: 'Dr. Emily Rose', status: 'Pending' }
  ];

  approveBlog(blogId: number) {
    const blog = this.blogs.find(b => b.id === blogId);
    if (blog) {
      blog.status = 'Approved';
    }
  }

  rejectBlog(blogId: number) {
    const blog = this.blogs.find(b => b.id === blogId);
    if (blog) {
      blog.status = 'Rejected';
    }
  }

  deleteBlog(blogId: number) {
    this.blogs = this.blogs.filter(b => b.id !== blogId);
  }
}
