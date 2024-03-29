@extends('layouts.master')
@section('title')
    {{ __('Dashboard') }}
@endsection
@section('css')
    
@endsection
@section('content')
    <header class="ar-header">
        <div class="container">
            <h1>Art-Pixel</h1>
            <div class="col-md-3 mx-auto">
                <div class="input-group search">
                    <input class="form-control border" type="search" placeholder="Search..." />
                    <span class="input-group-text search"><i class="bi bi-search"></i></span>
                </div>
            </div>
            <nav class="menu">
                <ul>
                    <li>
                        <a href="#"><i class="bi bi-house-door-fill"></i>Home</a>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:5500/profile.html"><i class="bi bi-person-fill"></i>Profile</a>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:5500/users.html"><i class="bi bi-people-fill"></i>Frends</a>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:5500/galery.html"><i class="bi bi-people-fill"></i>Galery</a>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:5500/workshop.html"><i class="bi bi-hammer"></i></i>Workshop</a>
                    </li>
                    <li>
                        <a href="#"><i class="bi bi-chat-square-text-fill"></i>Message</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-gear-fill"></i> Settings
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <!-- Другие пункты меню настройки могут быть добавлены здесь -->
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                Logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                    <li>
                        <button id="theme-toggle">
                            <i class="bi bi-brightness-alt-high-fill"></i><!-- <i class="bi bi-brightness-alt-high"></i> -->
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <button id="mobile-menu-button">Меню</button>
    </header>

    <main>
        <div class="container ar-px">
            <div class="grid">
                <div class="left-sidebar">
                    <div class="section_1">
                        <div class="header">
                            <div class="circle">
                                <img src="assets/images/galery/pexels-photo-18784917.webp" alt="" />
                            </div>
                        </div>
                        <div class="section centered-container">
                            <div>
                                <h2 class="bold">{{ $profileData->name }} {{ $profileData->last_name }}</h2>
                            </div>
                            <div>
                                <p class="text-light">{{ $profileData->aboutMe->occupations }}</p>
                            </div>
                            <div class="border-block-end"></div>
                            <div>
                                <h2 class="text-light">Folowing</h2>
                            </div>
                            <div>
                                <h2 class="bold">{{ $friendsAndFollowers['followingCount'] }}</h2>
                            </div>
                            <div class="border-block-end"></div>
                            <div>
                                <h2 class="text-light">Followers</h2>
                            </div>
                            <div>
                                <h2 class="bold">{{ $friendsAndFollowers['followersCount'] }}</h2>
                            </div>
                            <div class="border-block-end"></div>
                            <div class=""><a href="">View Profile</a></div>
                        </div>
                    </div>

                    <div class="section_2">
                        <div class="header-card">
                            <div class="space-between">
                                <h2 class="bold">Suggestions</h2>
                                <button class="button-icon"><i class="bi bi-three-dots-vertical"></i></button>
                            </div>
                        </div>
                        <div class="section centered-container">
                            <div class="border-block-end"></div>

                            @foreach ($randomUsersForFriendship as $friend)
                                <div class="item_left_sidebar_section_2">
                                    <div class="circle">
                                        <img src="{{ $friend->profile_image_url ?? asset('assets/images/noimg.png') }}"
                                            alt="" />
                                    </div>
                                    <div class="text">
                                        <p class="bold">{{ $friend->name }} {{ $friend->last_name }}</p>
                                        <p class="text-light">{{ $friend->aboutMe->occupations }}</p>
                                    </div>
                                    <div class="flex">
                                        <button class="button-icon right-top">
                                            <i class="bi bi-plus-square" style="font-size: 25px"></i>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                            <div class=""><a href="">View Profile</a></div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <!--  -->
                    <div class="section_say">
                        <div class="circle">
                            <img src="assets/images/galery/pexels-photo-18784917.webp" alt="" />
                        </div>
                        <div class="form flex align-items-center">
                            <input type="text" />
                        </div>
                        <div class="flex align-items-center post_message">
                            <button type="button" class="btn btn-secondary">Post a Job</button>
                            <button type="button" class="but btn btn-danger">Post a message</button>
                        </div>
                    </div>
                    <!--  -->


                    <div class="posts">
                        @foreach ($posts as $post)
                            <div class="post">
                                <div class="post-header">
                                    <div class="circle">
                                        <img src="{{ $post->author->profile_image_url ?? asset('assets/images/noimg.png') }}"
                                            alt="image {{ $post->author->name }}" />
                                    </div>
                                    <div class="text">
                                        <p class="bold">{{ $post->author->name }} {{ $post->author->last_name }}</p>
                                        <p class="text-light">{{ $post->created_at->format('d.m.Y H:i:s') }}
                                            {{ $post->visibility }} </p>
                                    </div>
                                    <div class="flex justify-content-right">
                                        <button class="button-icon">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="post-content">
                                    <p>{{ $post->title }}</p>
                                    <p>{{ $post->content }}</p>
                                    <div class=""><a href="">View more</a></div>
                                </div>

                                <div class="post-actions flex">
                                    <div class="left">
                                        <i class="bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1"></i> 42
                                        <!--  <i class="bi bi-hand-thumbs-down-fill color-orange"></i> 12 -->

                                    </div>
                                    <div class="flex justify-content-center align-items-center">
                                        <i class="bi bi-chat icon-30 mr-1"></i> 12
                                    </div>
                                    <div class="right align-items-center">
                                        <i class="bi bi-reply icon-30 mr-1"></i> 5
                                    </div>
                                </div>

                                <div class="post-footer">
                                    <div class="flex justify-content-center align-items-center">
                                        <button class="like-button">Like</button>
                                    </div>
                                    <div class="flex justify-content-center align-items-center">
                                        <button class="like-button comment-button">Comment</button>
                                    </div>
                                    <div class="flex justify-content-center align-items-center">
                                        <button class="like-button">Share</button>
                                    </div>
                                </div>
                                <input type="text" placeholder="write comment" />
                                <div class="comments">
                                    <!-- Секція для коментарів -->
                                    @foreach ($post->comments as $comment)
                                        <div class="comment">
                                            <!-- Виведення інформації про автора батьківського коментаря -->
                                            <div class="header flex">
                                                <div class="circle">
                                                    <img src="{{ $comment->authorComments->profile_image_url ?? asset('assets/images/noimg.png') }}"
                                                        alt="Avatar {{ $comment->authorComments->name }}" />
                                                </div>
                                                <div class="comment-info flex align-items-center">
                                                    <h3>{{ $comment->authorComments->name }}
                                                        {{ $comment->authorComments->last_name }}</h3>
                                                    <p>{{ $comment->created_at->format('d.m.Y H:i:s') }}</p>
                                                </div>
                                            </div>
                                            <p class="comment-text"> {{ $comment->content }} </p>

                                            <!-- Виведення дочірніх коментарів, якщо вони є -->
                                            @if ($comment->childComments->isNotEmpty())
                                                <div class="child-comments">
                                                    @foreach ($comment->childComments as $childComment)
                                                        <div class="header flex">
                                                            <div class="circle">
                                                                <img src="{{ $childComment->authorComments->profile_image_url ?? asset('assets/images/noimg.png') }}"
                                                                    alt="Avatar {{ $childComment->authorComments->name }}" />
                                                            </div>
                                                            <div class="comment-info flex align-items-center">
                                                                <h3>{{ $childComment->authorComments->name }}
                                                                    {{ $childComment->authorComments->last_name }}</h3>

                                                                </p> <span class="ansvered">answered
                                                                </span>
                                                                <h3>{{ $comment->authorComments->name }}
                                                                    {{ $comment->authorComments->last_name }}</h3>
                                                                <p>{{ $childComment->created_at->format('d.m.Y H:i:s') }}
                                                            </div>
                                                        </div>
                                                        <p class="comment-text"> {{ $childComment->content }} </p>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    @endforeach

                                    <input type="text" placeholder="write comment" />

                                    <!-- Додайте інші коментарі тут -->
                                </div>
                            </div>
                        @endforeach
                        <div class="post">
                            <div class="post-header">
                                <div class="circle">
                                    <img src="assets/images/noimg.png" alt="" />
                                </div>
                                <div class="text">
                                    <p class="bold">Alex Petroff</p>
                                    <p class="text-light">5 october о 14:58 public</p>
                                </div>
                                <div class="flex justify-content-right">
                                    <button class="button-icon">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="post-content">
                                <p>Вміст посту тут. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <div class=""><a href="">View more</a></div>
                            </div>

                            <div class="post-actions flex">
                                <div class="left">
                                    <i class="bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1"></i> 42
                                    <!--  <i class="bi bi-hand-thumbs-down-fill color-orange"></i> 12 -->

                                </div>
                                <div class="flex justify-content-center align-items-center">
                                    <i class="bi bi-chat icon-30 mr-1"></i> 12
                                </div>
                                <div class="right align-items-center">
                                    <i class="bi bi-reply icon-30 mr-1"></i> 5
                                </div>
                            </div>

                            <div class="post-footer">
                                <div class="flex justify-content-center align-items-center">
                                    <button class="like-button">Like</button>
                                </div>
                                <!--  <div class="flex justify-content-center align-items-center">
                                                                                                                                              <button class="like-button">Comment</button>
                                                                                                                                            </div> -->
                                <div class="flex justify-content-center align-items-center">
                                    <button class="like-button">Share</button>
                                </div>
                            </div>
                            <input type="text" placeholder="write coment" />
                            <div class="comments">
                                <!-- Секція для коментарів -->
                                <div class="comment">
                                    <img src="user-avatar.jpg" alt="Аватар користувача" />
                                    <div class="comment-info">
                                        <h3>Ім'я користувача</h3>
                                        <p>Час коментаря: 24 жовтня 2023, 16:00</p>
                                    </div>
                                    <p class="comment-text"></p>
                                </div>
                                <!-- Додайте інші коментарі тут -->
                            </div>
                        </div>

                        <div class="post">
                            <div class="post-header">
                                <div class="circle">
                                    <img src="assets/images/galery/pexels-photo-18784917.webp" alt="" />
                                </div>
                                <div class="text">
                                    <p class="bold">Alex Petroff</p>
                                    <p class="text-light">5 october о 14:58 public</p>
                                </div>
                                <div class="flex justify-content-right">
                                    <button class="button-icon">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="post-content">
                                <img src="assets/images/galery/pexels-photo-18784917.webp" alt="Фото або відео" />
                                <p>Вміст посту тут. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <div class=""><a href="">View more</a></div>
                            </div>

                            <div class="post-actions flex">
                                <div class="left">
                                    <i class="bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1"></i> 42
                                    <!--  <i class="bi bi-hand-thumbs-down-fill color-orange"></i> 12 -->

                                </div>
                                <div class="flex justify-content-center align-items-center">
                                    <i class="bi bi-chat icon-30 mr-1"></i> 12
                                </div>
                                <div class="right align-items-center">
                                    <i class="bi bi-reply icon-30 mr-1"></i> 5
                                </div>
                            </div>

                            <div class="post-footer">
                                <div class="flex justify-content-center align-items-center">
                                    <button class="like-button">Like</button>
                                </div>
                                <!--  <div class="flex justify-content-center align-items-center">
                                                                                                                                              <button class="like-button">Comment</button>
                                                                                                                                            </div> -->
                                <div class="flex justify-content-center align-items-center">
                                    <button class="like-button">Share</button>
                                </div>
                            </div>
                            <input type="text" placeholder="write coment" />
                            <div class="comments">
                                <!-- Секція для коментарів -->
                                <div class="comment">
                                    <img src="assets/images/galery/pexels-photo-18784917.webp" alt="Аватар користувача" />
                                    <div class="comment-info">
                                        <h3>Ім'я користувача</h3>
                                        <p>Час коментаря: 24 жовтня 2023, 16:00</p>
                                    </div>
                                    <p class="comment-text"></p>
                                </div>
                                <!-- Додайте інші коментарі тут -->
                            </div>
                        </div>

                        <div class="post">
                            <div class="carousel-container">
                                <div class="carousel-wrapper">
                                    <div class="user-card">
                                        <!-- Перша картка користувача -->
                                        <img src="assets/images/galery/pexels-photo-18784917.webp"
                                            alt="Аватар користувача 1" />
                                        <h3>Ім'я користувача 1</h3>
                                        <p>Опис користувача 1</p>
                                        <button class="add-friend-button">Додати в друзі</button>
                                    </div>
                                    <div class="user-card">
                                        <!-- Перша картка користувача -->
                                        <img src="assets/images/galery/pexels-photo-18784917.webp"
                                            alt="Аватар користувача 1" />
                                        <h3>Ім'я користувача 1</h3>
                                        <p>Опис користувача 1</p>
                                        <button class="add-friend-button">Додати в друзі</button>
                                    </div>
                                    <div class="user-card">
                                        <!-- Перша картка користувача -->
                                        <img src="assets/images/galery/pexels-photo-18784917.webp"
                                            alt="Аватар користувача 1" />
                                        <h3>Ім'я користувача 1</h3>
                                        <p>Опис користувача 1</p>
                                        <button class="add-friend-button">Додати в друзі</button>
                                    </div>
                                    <!-- Додайте інші картки користувачів тут -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>

                <div class="right-sidebar">
                    <div class="section_1">
                        <div class="header centered-container">
                            <img src="assets/images/noimg.png" alt="" />
                        </div>
                        <div class="section centered-container">
                            <div class="">
                                <h2>Track Time on Workwise</h2>
                            </div>
                            <div>
                                <p class="text-light">Pay only for the Hours worked</p>
                            </div>
                            <div class="border-block-end"></div>
                            <h2>SIGN UP</h2>
                            <div class=""><a href="">Learn more</a></div>
                        </div>
                    </div>

                    <div class="section_2">
                        <div class="header-card">
                            <div class="space-between">
                                <h2 class="bold">Top Jobs</h2>
                                <button class="button-icon"><i class="bi bi-three-dots-vertical"></i></button>
                            </div>
                        </div>
                        <div class="section centered-container">
                            <div class="border-block-end"></div>

                            <div class="item_right_sidebar_section_2">
                                <div class="">1</div>
                                <div class="text">
                                    <p class="bold">Alex Petroff</p>
                                    <p class="text-light">Web develodiver</p>
                                </div>
                                <div class="flex">
                                    <button class="button-icon right-top">
                                        <i class="bi bi-plus-square" style="font-size: 25px"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="item_right_sidebar_section_2">
                                <div class="">2</div>
                                <div class="text">
                                    <p class="bold">Alex Petroff</p>
                                    <p class="text-light">Web develodiver</p>
                                </div>
                                <div class="flex">
                                    <button class="button-icon right-top">
                                        <i class="bi bi-plus-square" style="font-size: 25px"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section_3">
                        <div class="header-card">
                            <div class="space-between">
                                <h2 class="bold">Most Viewed This Week</h2>
                                <button class="button-icon"><i class="bi bi-three-dots-vertical"></i></button>
                            </div>
                        </div>
                        <div class="section centered-container">
                            <div class="border-block-end"></div>

                            @foreach ($postMostViewed as $post)
                                <div class="item_right_sidebar_section_2">
                                    <div class="">{{ $post->viewed }}</div>
                                    <div class="text">
                                        <p class="bold">{{ $post->author->name }} {{ $post->author->last_name }}</p>
                                        <p class="text-light">{{ $post->preview($post->content, $limit = 50) }}</p>
                                    </div>
                                    <div class="flex">
                                        <button class="button-icon right-top">
                                            <i class="bi bi-plus-square" style="font-size: 25px"></i>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>

            <!--  -->
            <div class="fixed-bottom-right">
                <div class="note-count">
                    <div class="circle">
                        <img src="assets/images/galery/pexels-photo-18731989.jpeg" alt="" />
                    </div>
                    <div class="notification-badge">3</div>
                </div>
                <div class="note-count">
                    <div class="circle">
                        <img src="assets/images//galery/pexels-photo-8908813.jpeg" alt="" />
                    </div>
                    <div class="notification-badge">3</div>
                </div>
                <div class="note-count">
                    <div class="circle">
                        <img src="assets/images//galery/pexels-photo-11960755.jpeg" alt="" />
                    </div>
                    <div class="notification-badge">3</div>
                </div>
            </div>
        </div>
    </main>
@endsection
@section('scripts')
    {{--    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  
    <script src="{{ URL::asset('build/libs/apexcharts/apexcharts.min.js') }}"></script> --}}

    <script src="{{ URL::asset('js/script.js') }}"></script>
@endsection
