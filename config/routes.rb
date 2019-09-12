Rails.application.routes.draw do
  get 'pages/index'
  namespace :api do
    resources :articles
  end
end
