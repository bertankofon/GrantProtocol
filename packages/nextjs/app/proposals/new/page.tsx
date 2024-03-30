"use client";

import { Input } from "../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~~/components/ui/form";

const formSchema = z.object({
  chain: z.string(),
  project_vertical: z.string(),
  project_name: z.string(),
  project_link: z.string().url(),
  project_description: z.string(),
  grant_duration: z.string(),
  grant_amount: z.string(),
  grant_distribution: z.string(),
});

export default function ProposalForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chain: "ethereum",
      project_vertical: "l2",
      project_name: "",
      project_link: "",
      project_description: "",
      grant_duration: "",
      grant_amount: "",
      grant_distribution: "linear",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-xl">
          <FormField
            control={form.control}
            name="chain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Deployment Network</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a chain..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project_vertical"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your vertical?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your vertical..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="l2">L2 Solutions</SelectItem>
                    <SelectItem value="zk">ZK</SelectItem>
                    <SelectItem value="defi">DeFi</SelectItem>
                    <SelectItem value="gamefi">GameFi</SelectItem>
                    <SelectItem value="nft">NFT</SelectItem>
                    <SelectItem value="socialfi">SocialFi</SelectItem>
                    <SelectItem value="dao">DAO</SelectItem>
                    <SelectItem value="public">Public Goods</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="What's the project name?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project website</FormLabel>
                <FormControl>
                  <Input placeholder="Your project's website" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What is the project about and what kind of impact does it aim to have?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grant_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grant Amount</FormLabel>
                <FormControl>
                  <Input placeholder="How much grant you want?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grant_distribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grant Distribution</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How do you want grant to be distributed?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="linear">Linear</SelectItem>
                    <SelectItem value="dynamic">Dynamic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
