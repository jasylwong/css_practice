# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


install gem figaro for working with ENV variables in the development environment. (Heroku handles this for us in the production env)
install gem carrierwave and fog for file uploads with Amazon S3
install gem mini_magick for adjusting image sizes

From carrierwave to create an image uploader: $ rails g uploader Image
In this uploader file, change the storage to use fog instead of file

Create a new intializer file for carrierwave to set the correct variables