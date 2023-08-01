Rails.application.routes.draw do
  get 'two_pages/index'
  get 'one_pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "main#index"
end
