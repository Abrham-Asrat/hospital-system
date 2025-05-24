import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  OnInit,
  AfterViewChecked
} from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-blog',
  imports: [NgFor, NgIf, FormsModule, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements AfterViewInit, OnInit, AfterViewChecked {
  @Input() btnFromDoctor: boolean = false;
  @ViewChildren('blogContent') blogContentElements!: QueryList<ElementRef>;

  isEditing: boolean = false;
  editingBlog: any = null;
  isBlogForm: boolean = true;
  currentDoctorName: string = 'Dr. Workaba';
  newTag: string = '';

  newBlog = {
    title: '',
    content: '',
    category: 'General Medicine',
    author: 'Dr. Workaba',
    specialty: 'Cardiologist',
    date: '',
    likes: 0,
    comments: [] as { author: string; text: string }[],
    showComments: false,
    newComment: '',
    Image: '',
    expanded: false,
    showMoreButton: false,
    tags: [] as string[]
  };

  blogs: any[] = [
    {
      title: 'Understanding Heart Disease',
      content: 'Heart disease is a major cause of death worldwide...',
      category: 'Cardiology',
      author: 'Dr. Workaba',
      specialty: 'Cardiologist',
      date: 'March 6, 2025',
      likes: 3,
      comments: [] as { author: string; text: string }[],
      showComments: false,
      newComment: '',
      Image: '',
      expanded: false,
      showMoreButton: false,
      tags: ['#HeartDisease', '#Cardiology', '#Health']
    },
    {
      title: 'Understanding Heart',
      content: '',
      category: 'Cardiology',
      author: 'Dr. Workaba',
      specialty: 'Cardiologist',
      date: 'March 6, 2025',
      likes: 3,
      comments: [] as { author: string; text: string }[],
      showComments: false,
      newComment: '',
      Image:
        'https://addisstandard.com//wp-content/uploads/2023/08/article-min-edited-scaled.jpg',
      expanded: false,
      showMoreButton: false,
    },
    {
      title: 'Understanding Heart',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque ,👩🏾.',
      category: 'Cardiology',
      author: 'Dr. Workaba',
      specialty: 'Cardiologist',
      date: 'March 6, 2025',
      likes: 3,
      comments: [] as { author: string; text: string }[],
      showComments: false,
      newComment: '',
      Image:
        'https://addisstandard.com//wp-content/uploads/2023/08/article-min-edited-scaled.jpg',
      expanded: false,
      showMoreButton: false,
    },
    {
      title: 'Understanding Heart Disease',
      content: 'Heart disease is a major cause of death worldwide...',
      category: 'Cardiology',
      author: 'Dr. Workaba',
      specialty: 'Cardiologist',
      date: 'March 6, 2025',
      likes: 3,
      comments: [] as { author: string; text: string }[],
      showComments: false,
      newComment: '',
      Image: '',
      expanded: false,
      showMoreButton: false,
    },
    {
      title: 'Understanding Heart Disease',
      content: 'Heart disease is a major cause of death worldwide...',
      category: 'Cardiology',
      author: 'Dr. Workaba',
      specialty: 'Cardiologist',
      date: 'March 6, 2025',
      likes: 3,
      comments: [] as { author: string; text: string }[],
      showComments: false,
      newComment: '',
      Image: '',
      expanded: false,
      showMoreButton: false,
    },
  ];
   i: number; // ✅ Property declared
  title: string;

  constructor() {
    this.title = "My Angular Blog";
    this.i = 0; // ✅ Now works fine
  }

  ngOnInit() {
    // Initialize dropdowns
    this.initializeDropdowns();
  }

  ngAfterViewChecked() {
    // Re-initialize dropdowns after view changes
    this.initializeDropdowns();
  }

  private initializeDropdowns() {
    const dropdownButtons = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownButtons.forEach(button => {
      const dropdown = new bootstrap.Dropdown(button, {
        offset: [0, 2],
        boundary: 'viewport',
        autoClose: true
      });
    });
  }

  filteredBlogs = [...this.blogs];

  toggleExpand(blog: any) {
    blog.expanded = !blog.expanded;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newBlog.Image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addTag() {
    if (this.newTag.trim()) {
      const tag = this.newTag.trim();
      // Remove any existing # from the tag
      const cleanTag = tag.replace(/^#+/, '');
      const formattedTag = `#${cleanTag}`;
      if (!this.newBlog.tags.includes(formattedTag)) {
        this.newBlog.tags.push(formattedTag);
        this.newTag = '';
      }
    }
  }

  removeTag(tag: string) {
    this.newBlog.tags = this.newBlog.tags.filter(t => t !== tag);
  }

  postBlog() {
    if (this.newBlog.title && this.newBlog.content) {
      this.newBlog.date = new Date().toDateString();
      
      if (this.isEditing) {
        // Update existing blog
        const index = this.blogs.findIndex(b => b === this.editingBlog);
        if (index !== -1) {
          this.blogs[index] = { ...this.newBlog };
        }
        this.isEditing = false;
        this.editingBlog = null;
      } else {
        // Add new blog
        const newBlogPost = {
          ...this.newBlog,
          likes: 0,
          comments: [],
          showComments: false,
          newComment: '',
          expanded: false,
          showMoreButton: false,
          tags: [...this.newBlog.tags] // Ensure tags are copied
        };
        this.blogs.unshift(newBlogPost);
      }

      this.filteredBlogs = [...this.blogs];

      // Reset the new blog form
      this.newBlog = {
        title: '',
        content: '',
        category: 'General Medicine',
        author: 'Dr. Workaba',
        specialty: 'Cardiologist',
        date: '',
        likes: 0,
        comments: [],
        showComments: false,
        newComment: '',
        Image: '',
        expanded: false,
        showMoreButton: false,
        tags: [] // Reset tags array
      };
      this.newTag = '';
    }
  }

  filterBlogs(category: string) {
    this.filteredBlogs = category
      ? this.blogs.filter((blog) => blog.category === category)
      : [...this.blogs];
  }

  likeBlog(blog: any) {
    blog.likes++;
  }

  toggleComments(blog: any) {
    blog.showComments = !blog.showComments;
  }

  postComment(blog: any) {
    if (blog.newComment.trim()) {
      blog.comments.push({ author: 'Dr. Abebe', text: blog.newComment });
      blog.newComment = '';
    }
  }

  ngAfterViewInit() {
    this.blogContentElements.forEach((el, index) => {
      const contentElement = el.nativeElement;
      this.blogs[index].showMoreButton =
        contentElement.scrollHeight > contentElement.clientHeight;
    });
  }

  // blog toggler show and hidder
  toggleBlogForm() {
    this.isBlogForm = !this.isBlogForm;  };
     blog = {
    title: 'My first blog',
    author: 'Alice',
    content: 'Lorem ipsum...'



  }
  

deleteBlog(blog: any) {
  if (confirm('Are you sure you want to delete this blog?')) {
    const index = this.blogs.findIndex(b => b === blog);
    if (index !== -1) {
      this.blogs.splice(index, 1);
      this.filteredBlogs = [...this.blogs];
    }
  }
}

editBlog(blog: any) {
  this.editingBlog = blog;
  this.newBlog = { ...blog };
  this.isBlogForm = false;
  this.isEditing = true;
}


}