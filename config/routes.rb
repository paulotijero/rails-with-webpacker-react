Rails.application.routes.draw do
  root to: 'pages#index'
  namespace :api do
    resources :articles
  end
end
