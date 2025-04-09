import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [NgFor, NgIf, FormsModule, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements AfterViewInit {
  @ViewChildren('blogContent') blogContentElements!: QueryList<ElementRef>;

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
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellenduolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendusr, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellenduLorem ipsum dolor, sit met consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus,👩🏾orem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus,👩🏾.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus,👩🏾.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendusLorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellenduor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus, quo quos possimus quaerat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati ipsum ipsam dolor voluptatum eligendi tempora ratione veritatis dolore aspernatur inventore dolorem exercitationem nam quam laboriosam a laborum sequi dicta, reiciendis modi numquam eaque cumque quos! Libero odit amet provident ad corporis? Quod inventore, expedita iure quibusdam tempore deserunt soluta qui voluptates ea repellat in obcaecati enim nulla incidunt debitis eum necessitatibus animi, tenetur architecto ducimus nemo quae. Blanditiis dolores, laboriosam quibusdam explicabo excepturi vitae magni ratione qui, expedita numquam labore cum, iste dolor ullam vel. Voluptas laboriosam voluptatum magnam nobis, odit similique optio animi repellendus,👩🏾.',
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

  filteredBlogs = [...this.blogs];

  toggleExpand(blog: any) {
    blog.expanded = !blog.expanded;
  }

  postBlog() {
    if (this.newBlog.title && this.newBlog.content) {
      this.newBlog.date = new Date().toDateString();
      this.newBlog.likes = 0;
      this.newBlog.comments = [];
      this.newBlog.showComments = false;
      this.newBlog.newComment = '';

      this.blogs.unshift({ ...this.newBlog });
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
      };
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
      this.blogs[index].showMoreButton = contentElement.scrollHeight > contentElement.clientHeight;
    });
  }
}
