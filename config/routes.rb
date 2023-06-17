Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # devise_for :users, controllers: {
  #   registrations: "users/registrations",
  #   sessions: "users/sessions",
  #   omniauth_callbacks: "users/omniauth_callbacks"
  # }

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  get "/me", to: "users#me"
  
  resources :schools
  resources :students
  resources :teachers
  resources :student_classes
  resources :users
  resources :course_enrollments

  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # get 'auth/:provider/callback', to: 'sessions#users'
  # get '/login', to: 'sessions#new'

end
