Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      get "/ordered-prompts", to: "propmts#ordered"
      get "/most-stories", to: "posts#most_stories"
      post "/auth/:provider/callback", to: "sessions#omniauth"

      resources :users, only: [:update, :destroy]
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      
      resources :stories, only: [:index, :create]

      
      resources :prompts, only: [:index, :create]
        resources :stories, shallow: true
    end
  end
end
